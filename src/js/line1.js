export default function loader() {
    console.log('entra')
    if (document.querySelector("#white-btn-1") !== null) {
        document.querySelector("#white-btn-1").addEventListener("click", function () {
            console.log('white');
            pannellum.viewer('panorama', {
                "type": "equirectangular",
                "panorama": "images/line1_1.jpg",
                "autoLoad": true
            });
        })
    } 

    if (document.querySelector("#red-btn-1") !== null) {
        document.querySelector("#red-btn-1").addEventListener("click", function red() {
            console.log('red');
            pannellum.viewer('panorama', {
                "type": "equirectangular",
                "panorama": "images/line1_1.jpg",
                "autoLoad": true
            });
        })
    }

    if (document.querySelector("#blue-btn-1") !== null) {
        document.querySelector("#blue-btn-1").addEventListener("click", function blue() {
            console.log('blue');
            pannellum.viewer('panorama', {
                "type": "equirectangular",
                "panorama": "images/line1_1.jpg",
                "autoLoad": true
            });
        })
    }

    if (document.querySelector("#grey-btn-1") !== null) {
        console.log('grey');
        document.querySelector("#grey-btn-1").addEventListener("click", function grey() {
            pannellum.viewer('panorama', {
                "type": "equirectangular",
                "panorama": "images/line1_1.jpg",
                "autoLoad": true
            });
        })
    }
}
