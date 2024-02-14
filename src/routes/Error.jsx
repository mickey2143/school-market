import Nav from "../components/nav/nav.comp"
function ErrorPage(){
    return(
        <div className="text-black h-full relative">
            <Nav />
            <h1 className="text-4xl p-36">Opps Something happened</h1>
        </div>
    )
}

export default ErrorPage;