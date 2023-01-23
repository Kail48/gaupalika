import React from 'react'

import '../../Css/HomePage/homepage.css';

export default function NoticeShowCase(props) {
  let notice=props.data;
  const title= <p class="title is-size-5 has-text-centered has-text-weight-bold has-text-white notice-title ">{notice.name}</p>
  const content=notice.content.map(listitem => (
    <div className='subcontent pl-5'>
        <p className='subtitle is-underlined'>{listitem.sub_title}</p>
        <p className='description'>{listitem.description}</p>
    </div>
  ));
  
  return (
  <div className='notice-content'>
  <   div className='notice-page'>
        {title}
        {content}
      </div>
  </div>

  );
};
