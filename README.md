# finalProject-banner-back

BASE_URL/users/login
BASE_URL/users/register
BASE_URL/recommended/categoryName
get = BASE_URL/recommended/allProducts
get = BASE_URL/recommended/recProducts
get = BASE_URL/recommended/recProductsById/:recProductId
get = BASE_URL/recommended/recProductsByProductId:productId
post = BASE_URL/recommended/recProduct
delete = BASE_URL/recommended/recProduct/:recProductsId
get = BASE_URL/banners/allBanners
get = BASE_URL/banners/bannerById/:bannerId
get = BASE_URL/banners/bannerByTitle/:bannerTitle"
get = BASE_URL/banners/allCategories
get = BASE_URL/banners/banners
post = BASE_URL/banners/banner
delete = BASE_URL/banners/banner/:bannerId
put = BASE_URL/banners/banner/:bannerId

ENV
MONGO_CONNECTION_URI=mongodb+srv://developers:x9XA3MGuRfIN4jIv@cluster0.erbreex.mongodb.net/
BASE_URL_ERP=https://erp-server-uxqd.onrender.com/
PORT=8080
ACCESS_TOKEN_JWT
