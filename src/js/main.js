const footerYear = document.querySelector(".footer__year")
const navMobile = document.querySelector(".nav__mobile")
const navBtnOpen = document.querySelector(".nav__btn--open")
const navBtnClose = document.querySelector(".nav__btn--close")
const navItems=document.querySelector(".nav__mobile-items")

const handleNav = () => {
	document.body.classList.toggle("sticky-body")
	navMobile.classList.toggle("nav__mobile--active")
	navBtnClose.classList.toggle("nav__btn--show")
	navBtnOpen.classList.toggle("nav__btn--hide")
	console.log(navItems)

}


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()


navBtnOpen.addEventListener("click", handleNav)
navBtnClose.addEventListener("click", handleNav)
navItems.addEventListener("click", handleNav)


