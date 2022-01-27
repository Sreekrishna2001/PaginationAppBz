import React from 'react';

function Posts({data,loading}) {
 
if(loading)return <h2>Loading....</h2> 
  return <>
    <table >
        <tr>
            <th>user id</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
         
        </tr>
    { 
        data.map(d=>{
            return <>
                <tr>
                    <td>{d.userId}</td><td>{d.id}</td><td>{d.title}</td><td>{d.body}</td>
                </tr>
            </>
        })
    }
       </table>
  </>
}

export default Posts;
