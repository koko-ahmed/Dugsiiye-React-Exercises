// const UserCard =()=>{
//     return(
//         <div>
//         <h1>Eng Kouther</h1>
//         <p>Kou@gmail.com</p>
//         </div>
//     )
// }
// export default UserCard;

const UserCard = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default UserCard;