import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div>
    <header class="header-area">

<div class="top-header-area">
<div class="container">
<div class="row">
<div class="col-6">
<div class="top-header-content">
<Link href="/"><i class='bx bxs-phone'></i> <span>Call Us: 001-1234-88888</span></Link>
<Link href="/"><i class='bx bx-envelope' ></i> <span>Email: info@therapidanalyzer.com</span></Link>
</div>
</div>
<div class="col-6">
<div class="top-header-content">

<Link href="/signin"><i class='bx bx-lock-alt' ></i> <span>Login / Register</span></Link>

<div class="">
<select class="form-select" id="language" name="language">
      <option>English</option>
      <option>Hindi</option>
      
    </select>
</div>
</div>
</div>
</div>
</div>
</div>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
<div class="container">
  
    <Link class="navbar-brand" href="/">TheRapidAnalyzer</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse headnav" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" href="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/">Investing</Link>
        </li>  
        <li class="nav-item">
          <Link class="nav-link" href="/">Trading</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link" href="/">Research Tools</Link>
        </li>  
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">Apps</Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="/">Beginner</Link></li>
            <li><Link class="dropdown-item" href="/">Another link</Link></li>
            <li><Link class="dropdown-item" href="/">A third link</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</header>
    </div>
  )
}
