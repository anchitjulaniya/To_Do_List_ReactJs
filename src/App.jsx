function App() {

  const addTask = ()=>{
    console.log("add task");
    console.log("showModal");
    console.log("hello")
  }
    const [showModal, setModal] = useState(false);

    const toggleModal = ()=>{
        setModal(!showModal)
    }
  return (
    <div>
      <h1>Mohit and ANchit</h1>
    </div>
  )
}

export default App