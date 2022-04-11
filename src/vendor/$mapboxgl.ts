import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiczU4MzgzNzg4IiwiYSI6ImNreWI4bTg4ZDBkMzAyd3A4MGs1OXhjamQifQ.EGVAwrEWnSaxQq8weQrrow';

if ((mapboxgl.Map.prototype as any)._setupPainter.toString().indexOf('webgl2') === -1) {
  // 原生mapbox-gl只支持 webgl 1, 为更好的使用 deck.gl, hack源码开启 webgl 2
  let _setupPainter_old = (mapboxgl.Map.prototype as any)._setupPainter;
  (mapboxgl.Map.prototype as any)._setupPainter = function () {
    let getContext_old = (this as any)._canvas.getContext;
    (this as any)._canvas.getContext = function (name: any, attrib: any) {
      return (
        getContext_old.apply(this, ['webgl2', attrib]) ||
        getContext_old.apply(this, ['webgl', attrib]) ||
        getContext_old.apply(this, ['experimental-webgl', attrib])
      );
    };
    _setupPainter_old.apply(this);
    (this as any)._canvas.getContext = getContext_old;
  };
}

export default mapboxgl;
