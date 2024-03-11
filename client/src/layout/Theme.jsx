import React from 'react'

export default function Theme() {

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('class', 'light');
      localStorage.setItem('theme', 'light');      
    }
    else {
      document.documentElement.setAttribute('class', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <>
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox" onClick={(e)=>switchTheme(e)}>
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
          <i className="icofont-moon"></i>
        </label>
        <em>Enable Dark Mode!</em>
      </div>
    </>
  )
}
