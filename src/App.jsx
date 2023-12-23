import React, { useState } from "react";
import Card from "./Components/Card";
const App = () => {
  const data = [
    {
      name: "John Doe",
      profession: "Software Engineer",
      img: "https://media.istockphoto.com/id/1159791451/photo/young-handsome-man-in-casual-outfit-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=0m6DBEdDUqBmjVQwYxDITEOXFMoCrruQ8LyMwvg5_Qg=",
      friends: false,
    },
    {
      name: "Roshan",
      profession: "painter",
      img: "https://media.istockphoto.com/id/669847048/photo/little-boy-smiling-happiness-studio-portrait.jpg?s=1024x1024&w=is&k=20&c=4vM0teJ7hJVFy_GBvB6oCbEwEl9ejrCgRj6cmhZi194=",
      friends: false,
    },
    {
      name: "Deppu",
      profession: "student",
      img: "https://media.istockphoto.com/id/1283231614/photo/portrait-of-happy-asian-handsome-young-man-in-fashionable-clothing.jpg?s=1024x1024&w=is&k=20&c=TGy4KsgjiwajH7kzurUK4ngI6wKWONs_lK3ldvXvXoM=",
      friends: false,
    },
  ];

  const [realdata, setrealdata] = useState(data)
  let handler = (cardindex) =>{
    setrealdata((previous)=>{
       return previous.map((item,index)=>{
        if(index === cardindex){
          return {...item ,friends:!item.friends}
        }

        return item ;
      })
    })
  }
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-10 items-center justify-center">
        {realdata.map((items, index) => (
          <Card key={index} values={items} index={index} handler={handler} friends={items.friends} />
        ))}
      </div>
    </>
  );
};

export default App;
