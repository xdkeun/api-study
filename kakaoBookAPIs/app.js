const REST_API_KEY = "93965c2d87d826b6a2c82e922835057c";
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"우리" },
        headers: {Authorization: `KakaoAK ${REST_API_KEY}`},
    })
    .done(function( msg ) {
        console.log(msg.documents[2]);
        $( "div" ).append( `책의 제목 : <strong>${msg.documents[0].title}</strong> <br>`);
        $( "div" ).append( `책 표지 : <img src=${msg.documents[0].thumbnail} /> <br>`);
        $( "div" ).append( `책의 출판사 : ${msg.documents[0].publisher} <br>`);
        $( "div" ).append( `책의 가격 : ${msg.documents[0].price} <br>`);
    });