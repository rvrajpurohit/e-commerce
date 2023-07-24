const FackApi = async() => {
    const fakeData = await fetch('https://fakestoreapi.com/products/category/jewelery');
    const result = fakeData.json();
    return result;
}

export default FackApi;