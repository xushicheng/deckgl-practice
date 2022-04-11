import Link from 'next/link';

const Index = () => {
  return (
    <div className="text-2xl text-blue-500 ">
      <ul>
        <li>
          <Link href="/arc">
            <a>ArcLayer</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

Index.defaultProps = {};
export default Index;
