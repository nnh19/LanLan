const Content = () => {
  const count = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      {count.map((e) => (
        <img
          src="https://tophinhanhdep.com/wp-content/uploads/2021/10/Kevin-Minion-Wallpapers.jpg"
          className="App-logo"
          alt="logo"
          key={e}
        />
      ))}
    </>
  );
};
export default Content;
