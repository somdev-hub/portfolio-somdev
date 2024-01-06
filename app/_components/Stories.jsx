import React from "react";

const Stories = () => {
  const stories = [
    {
      title: "Commodo incididunt qui eiusmod labore commodo ipsum id est nisi.",
      description:
        "Quis eu excepteur culpa labore.Cupidatat qui cillum enim velit enim est eu velit do.Eiusmod ex reprehenderit dolore duis elit consequat veniam anim exercitation aliquip non velit velit consequat.Nulla non proident velit qui consequat.",
      img: "https://img.freepik.com/premium-photo/japan-national-symbol-sightseeing-mount-fuji-representative-landmark-beautiful-mountain_916211-257625.jpg",
      length: "5 mins read",
      tags: ["web", "mobile"]
    },
    {
      title: "Nulla dolor est qui sit duis officia proident ex esse id cillum",
      description:
        "Laboris consequat esse sint id et commodo quis sit excepteur do culpa culpa.Voluptate labore qui aliquip aute Lorem amet laboris aliquip id pariatur labore laborum culpa ex.Laborum ullamco nostrud sint exercitation labore labore culpa nostrud eiusmod minim eu est",
      img: "https://img.freepik.com/premium-photo/japan-national-symbol-sightseeing-mount-fuji-representative-landmark-beautiful-mountain_916211-257625.jpg",
      length: "5 mins read",
      tags: ["web", "mobile"]
    },
    {
      title: "Incididunt aliqua laborum dolore id cillum et ea occaecat.",
      description:
        "Sint reprehenderit duis reprehenderit commodo nostrud consectetur reprehenderit.Adipisicing ex officia Lorem voluptate.Pariatur non cupidatat nostrud consectetur incididunt fugiat incididunt irure nulla ut mollit.Consectetur velit adipisicing labore esse reprehenderit exercitation commodo occaecat.",
      img: "https://img.freepik.com/premium-photo/japan-national-symbol-sightseeing-mount-fuji-representative-landmark-beautiful-mountain_916211-257625.jpg",
      length: "5 mins read",
      tags: ["web", "mobile"]
    }
  ];
  return (
    <div className="my-[5rem] mx-[7.5rem]">
      <div className="flex justify-between">
        <div className="flex flex-1 flex-col">
          <h3 className=" text-[1.6rem] font-roboto font-[500]">Read out </h3>
          <h3 className=" text-[2.3rem] font-glacial-indifference-bold font-[700] leading-[normal]">
            my latest blogs
          </h3>
        </div>
        <div className="flex flex-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo
            deleniti amet est at voluptate accusamus. Aperiam et soluta id quod,
            reiciendis quam. Excepturi iste vero esse, optio ut veniam suscipit,
            itaque doloribus officiis nisi illo eligendi velit repudiandae.
            Corporis nostrum rem provident non hic doloribus porro odit alias
            ea?
          </p>
        </div>
      </div>
      <div className="mt-[5rem] flex gap-16 justify-center">
        {stories.map((story, i) => {
          return (
            <div
              className="flex flex-col flex-1 rounded-lg hover:border-solid hover:border-2 p-4 box-border"
              key={i}
            >
              <img
                src={story.img}
                alt=""
                className="rounded-lg object-cover h-[40%] w-full"
              />
              <div className="flex gap-2 mt-3 items-center">
                {story.tags.map((tag, i) => {
                  return (
                    <div
                      className="bg-purple rounded-full py-1 px-2 text-white font-roboto font-[500]"
                      key={i}
                    >
                      {tag}
                    </div>
                  );
                })}
                <p className="font-[600] font-glacial-indifference-regular">
                  {story.length}
                </p>
                {/* <div className="">web</div> */}
              </div>
              <div className="mt-3">
                <h3 className="font-outfit text-[1.2rem] mb-2 font-[600]">
                  {story.title}
                </h3>
                <p className="font-[500] font-outfit">{story.description}</p>
              </div>
              <p className="mt-3 font-glacial-indifference-regular font-[600] text-[1.125rem]">
                Read more
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
