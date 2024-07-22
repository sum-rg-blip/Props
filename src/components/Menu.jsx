function Menu({foodName , description , price , image  }) {
  return  <div>
  <div className="sm:ml-[250px] mt-10 sm:flex flex-row">
  <img className="w-[170px] h-[170px]" src={image} alt="" />
 <div>
  <p className="ml-3 font-bold">{foodName}</p>
  <p className="font-bold ml-3">{price}</p>
  <p className="ml-3">{description} </p>
  <button className="bg-orange-400 rounded-[10px] mt-3 ml-3">Order now</button>
  </div>
  </div>





  </div>
}

export default Menu