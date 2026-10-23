import Blog from "./Blog";
import UserCard from "./UserCard";
function App(){
  return(
     <div>
      <UserCard
        name="Kouther"
        email="kouther@gmail.com"
      />

      <UserCard
        name="Ahmed"
        email="ahmed@gmail.com"
      />

      <UserCard
        name="Mohamed"
        email="mohamed@gmail.com"
      />
    </div>
  )
  
}
export default App;