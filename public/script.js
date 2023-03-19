const url = "https://api.github.com/users";
const div = document.querySelector(".mainDiv");

const showUI = (momo) => {
  momo.forEach((element) => {
    const image = document.createElement("img");
    image.src = element.avatar_url;
    image.width = "100";
    div.append(image);
  });
};
const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showUI(data);
};
getData();
