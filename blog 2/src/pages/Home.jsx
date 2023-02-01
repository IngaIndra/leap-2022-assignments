import Card from "../components/Card";

export default function Home() {
  const articles = [
    {
      image:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/544c5374609d46cc8d4baf33010cd714_9366/always-original-trench-coat.jpg",
      title: "Adidas Trench Coat",
    },
    {
      image:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/544c5374609d46cc8d4baf33010cd714_9366/always-original-trench-coat.jpg",
      title: "Adidas Trench Coat",
    },
    {
      image:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/544c5374609d46cc8d4baf33010cd714_9366/always-original-trench-coat.jpg",
      title: "Adidas Trench Coat",
    },
  ];
  return (
    <main>
      <div className="container">
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-3 col-sm-6 col-12" key={index}>
              <Card title={article.title} image={article.image} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
