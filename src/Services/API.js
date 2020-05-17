import serviceBase from "../Services/serviceBase";
const productService = {
    getData:(a,b)=>serviceBase.get(`/interest?amount=${a}&numMonths=${b}`),
};
export default productService;
