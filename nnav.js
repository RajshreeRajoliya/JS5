function loadNavbar(){

    const nav = `
    <nav>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
</nav>
    `
document.getElementById("navbar").innerHTML = nav
}

export {loadNavbar}