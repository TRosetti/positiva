// const feed = "media_type,media_url"
// const reels = "media_type,is_shared_to_feed=false,media_url"
// const limite = 20;
// const token = "IGQWRQRWFtaHNjcFJVY2s1UzNRVHJ2OHhXdlZAhenpuTDVjZA1lhRjFzZAFZA5ZADZAoOW5mWjhZAMzJ0RW9YQUFhUDBVYmUyRVdRVWFYa01NVzVObmdha3NUWmM1TGdnZA1d4b053VHdlNGdZAd1ZAMNnVnVXVNeUQwdi1wVmcZD";
// const baseURLFeed = `https://graph.instagram.com/me/media?fields=${feed}&access_token=${token}&limit=${limite}`;

// const baseURLReels = `https://graph.instagram.com/me/media?fields=${reels}&access_token=${token}&limit=${limite}`;

// //  Reels

// //  Feed


// fetch(baseURLFeed)
// .then(response => response.json())
// .then((data) => {
//     const media = document.querySelector(".media-wrapper")

//     data.data.forEach((img)  => {
//         const mediaType = img.media_type;
//         const mediaUrl = img.media_url;


//         if(mediaType === 'VIDEO'){
//             // const video = document.createElement("video");
//             // video.src = mediaUrl;
//             // video.classList.add('container-video');
//             // media.appendChild(video);
//         }else{
//             const swiperSlide = document.createElement('div');
//             swiperSlide.classList.add('swiper-slide')
//             const img = document.createElement('img')
//             img.src = mediaUrl;
            

//             media.appendChild(swiperSlide);
//             swiperSlide.appendChild(img)
//         }
//     })
// }).catch( (error) => console.log(error))

// console.log(baseURLFeed)