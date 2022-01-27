import React from 'react';

function PagenationComp({postsperpage,totalposts,GoToPage}) {

    let pagenums = []
    for(let i=1;i<=Math.ceil(totalposts/postsperpage);i++)pagenums.push(i);
  return <ul className='pagination'>
      {
          pagenums.map(pagenum=>{
            return <li key={pagenum} className='page-item'>
                <a onClick={()=>GoToPage(pagenum)} href='#' className='page-link'>{pagenum}</a>
            </li>
          })
      }
  </ul>
}

export default PagenationComp;
