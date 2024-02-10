import { Component } from "react";
import Nav from "../components/nav/nav.comp";
import SearchBox from "../components/search-box/search.comp";
import CardList from "../components/cardList/cardList.comp"

class Homepage extends Component{
  constructor(){
    super()
    this.state = {businesses:[{id:1,businessName:"Monas Kitchen",short:"Sells Spagehetti,Beans,Rice at a cheaper rate",socials:[{link:"monas.fb",type:'facebook'},{link:"@monas",type:"twitter"}]},{id:2,businessName:"Chidis Saloon",short:"Barbs Hair",socials:[{link:"chidi.fb",type:"facebook"},{link:"@chidi",type:"twitter"},{link:"@chidi",type:"instagram"}]},{id:3,businessName:"Monas Kitchen",short:"Sells Spagehetti,Beans,Rice at a cheaper rate",socials:[{link:"monas.fb",type:'facebook'},{link:"@monas",type:"twitter"}]},{id:4,businessName:"Chidis Saloon",short:"Barbs Hair",socials:[{link:"chidi.fb",type:"facebook"},{link:"@chidi",type:"twitter"},{link:"@chidi",type:"instagram"}]},{id:5,businessName:"Monas Kitchen",short:"Sells Spagehetti,Beans,Rice at a cheaper rate",socials:[{link:"monas.fb",type:'facebook'},{link:"@monas",type:"twitter"}]},{id:6,businessName:"Chidis Saloon",short:"Barbs Hair",socials:[{link:"chidi.fb",type:"facebook"},{link:"@chidi",type:"twitter"},{link:"@chidi",type:"instagram"}]},{id:1,businessName:"Debbies Enteeprise",short:"Sells anything",socials:[]}],searchText:''}

  }

  handleSearch = (e)=>{
      this.setState({searchText:e.target.value})
    }
  

  render(){
    const {businesses,searchText} = this.state

    let filteredBiz = businesses.filter((biz)=>{
      return(
        biz.businessName.toLowerCase().includes(searchText.trim().toLowerCase()) || biz.short.toLowerCase().includes(searchText.trim().toLowerCase())
      )

    })
    return(
      <div>

      

      <div className="search-bar">
          <h2>Find a Business</h2>
          <SearchBox search={(e)=>{
            this.setState({searchText:e.target.value})
          }} />
      </div>

      <CardList biz={filteredBiz} />

      </div>
    )
  }
}

export default Homepage