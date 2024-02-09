import Card from "../card/card.comp"

function CardList({biz}){
      
return(
  <main class="responsive-grid" id="biz">
     {(biz.length <= 0)?"No Business Found":
      biz.map((business)=><Card business={business} key={business.id}/>)
    }
  </main>
)

}
            
              
export default CardList