import { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts';
import PagenationComp from './components/PagenationComp';
function App() {
  const [data,setdata] = useState([])
  const [loading,setloading] = useState(false)
  const [currpage,setcurrpage] = useState(1)
  const [postperpage] = useState(10)

  useEffect(()=>{
    const fetchdata = async ()=>{
      setloading(true)
      const d = await fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
      setdata(d)
      setloading(false)
    }
    fetchdata()

  },[])

  let inoflastpos = currpage*postperpage
  let inoffirstpos = inoflastpos-postperpage
  let currposts = data.slice(inoffirstpos,inoflastpos)


let gotopage= (pagenum)=>{
  setcurrpage(pagenum)
}

  return (
    <div className="App">
      <Posts data={currposts} loading={loading} />
      <PagenationComp postsperpage={postperpage} totalposts={data.length} GoToPage={gotopage}/>
    </div>
  );
}

export default App;
