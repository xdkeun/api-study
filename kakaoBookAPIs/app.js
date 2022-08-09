const REST_API_KEY = "93965c2d87d826b6a2c82e922835057c";
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"미움받을 용기" },
        headers: {Authorization: `KakaoAK ${REST_API_KEY}`},
    })
    .done(function( msg ) {
        console.log(msg.documents[0].title);
        $( "div" ).append( `<strong>${msg.documents[0].title}</strong>`);
        $( "div" ).append( `<img src=${msg.documents[0].thumbnail}>`);
    });