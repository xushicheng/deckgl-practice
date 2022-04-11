import { Deck, Position2D } from '@deck.gl/core';
import { ArcLayer, GeoJsonLayer, GeoJsonLayerProps } from '@deck.gl/layers';
import { useEffect, useRef } from 'react';

import { AirPort, AirPortCollection, AirPortProps } from '@/data/airport';
import mapboxgl from '@/vendor/$mapboxgl';

const AIR_PORTS = '/ne_10m_airports.geojson';

const INITIAL_VIEW_STATE = {
  latitude: 51.47,
  longitude: 0.45,
  zoom: 4,
  bearing: 0,
  pitch: 30,
};

const Arc = () => {
  // deckGL 的 new Deck 实现与mapbox不同, 渲染的是2D效果, 不可以做三维旋转, 鼠标拖拉拽时候是对deck canvas在操作, mapbox interactive 是故意被设置成false的, 是故意屏蔽不让用户去操作mapbox的
  const mapContainer = useRef<HTMLDivElement>(null);
  const deckContainer = useRef<HTMLCanvasElement>(null);
  const map = useRef<mapboxgl.Map>();

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      interactive: false,
      center: [131.9, INITIAL_VIEW_STATE.latitude],
      zoom: INITIAL_VIEW_STATE.zoom,
      bearing: INITIAL_VIEW_STATE.bearing,
      pitch: INITIAL_VIEW_STATE.pitch,
      // doubleClickZoom: true, // 不允许双击放大
      // scrollZoom: true, // 不允许滚轮缩放
      // boxZoom: true,
      // attributionControl: true,
    });

    const deck = new Deck({
      canvas: deckContainer.current!,
      initialViewState: INITIAL_VIEW_STATE,
      controller: true,
      onViewStateChange: ({ viewState }) => {
        map.current!.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          bearing: viewState.bearing,
          pitch: viewState.pitch,
        });
      },
      layers: [
        new ArcLayer<AirPort>({
          id: 'arcs',
          data: AIR_PORTS,
          // @ts-expect-error
          dataTransform: (d: AirPortCollection) => d.features.filter((f) => f.properties.scalerank < 4) as AirPort[],
          // Styles
          getSourcePosition: (f) => [-0.4531566, 51.4709959], // London
          getTargetPosition: (f) => f.geometry.coordinates as Position2D,
          getSourceColor: [0, 128, 200],
          getTargetColor: [200, 0, 80],
          getWidth: 1,
        }),
        new GeoJsonLayer<AirPort>({
          id: 'airports',
          data: AIR_PORTS,
          // Styles
          filled: true,
          pointRadiusMinPixels: 2,
          pointRadiusScale: 2000,
          getPointRadius: (f) => {
            return 11 - f.properties.scalerank;
          },
          getFillColor: [200, 0, 80, 180],
          // Interactive props
          pickable: true,
          autoHighlight: true,
          onClick: (info) =>
            // eslint-disable-next-line
            info.object && alert(`${info.object.properties.name} (${info.object.properties.abbrev})`),
        }),
      ],
    });
  }, []);

  return (
    <div className="fixed inset-0">
      <div
        ref={mapContainer}
        className="absolute inset-0 w-full h-full"
      />
      <canvas
        ref={deckContainer}
        className="absolute inset-0 w-full h-full"
        id="deck-canvas"
      />
    </div>
  );
};

export default Arc;
