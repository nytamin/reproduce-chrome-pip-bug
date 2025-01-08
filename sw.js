self.addEventListener('fetch', function (event) {
    console.log('SW: got fetch event', event.request.url);


    let url = event.request.url
    if (url.includes('to-be-replaced-')) {

        url = url.replace('to-be-replaced-', '')
        console.log('SW: Replacing contents', url)
    }



    event.respondWith(
        fetch(url)
    )
})
