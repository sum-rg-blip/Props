// import Menu from "./Menu";
import Menu from "./Menu";
function Body(){
  return <div className="sm:flex  flex-row gap[30px]">
    <div>
    <Menu foodName="Australian Meat" description="free delivery" price="$30" image="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    <Menu foodName="Chinese Food" description="free delivery" price="$9.3" image="https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535870.jpg?t=st=1721644109~exp=1721647709~hmac=1032f2d06adc89cfceda1c9bcf46eb8136a7252689feb64645d1f5326681e02f&w=740"/>
    <Menu foodName="Mexican Food" description="free delivery" price="$2.3" image="https://img.freepik.com/free-photo/delicious-taco-studio_23-2150770589.jpg?t=st=1721644275~exp=1721647875~hmac=081d5632a17feb62c921e892fe546fb1a7f9fc8a8cf792c4d1ff13af2cb4bbcf&w=360"/>
    </div>
    <div>
    <Menu foodName="American Pizza" description="free delivery" price="$4.3" image="https://img.freepik.com/premium-photo/pizza-photo_913665-8553.jpg?w=740"/>
    <Menu foodName="British Food" description="free delivery" price="$12" image="https://img.freepik.com/free-photo/gourmet-meal-with-meat-plate-cooked-freshness-generative-ai_188544-8396.jpg?t=st=1721644158~exp=1721647758~hmac=44fe2ac423a22178b4b7113169ba9bb165d0e2852532e429ea142e89a89b8e60&w=740"/>
    <Menu foodName="Sea Food" description="free delivery" price="$13" image="https://img.freepik.com/premium-photo/freshness-seafood-plate-gourmet-meal-lunch_198067-573016.jpg?w=740"/>  
    </div>
   
    
  </div>
}
export default Body