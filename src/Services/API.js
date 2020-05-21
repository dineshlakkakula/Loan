import serviceBase from "../Services/serviceBase";
const productService = {
    getData:(a,b)=>serviceBase.get(`/search?api_key=M4Y1v9i41cK1TW8jQV8jdo5tCHShsCIY&q=${a}&limit=${b}&offset=10&rating=G&lang=en`),
};
export default productService;


