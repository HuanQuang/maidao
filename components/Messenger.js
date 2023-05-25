import { useEffect } from 'react';

function Messenger() {
    useEffect(() => {
        // Tạo một đối tượng script để thêm script của Facebook Chat Plugin
        const script = document.createElement('script');

        // Cập nhật thuộc tính của plugin
        script.setAttribute('src', 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js');
        script.setAttribute('nonce', 'nonce');
        script.setAttribute('async', 'true');
        script.setAttribute('crossorigin', 'anonymous');

        // Thêm script vào body
        document.body.appendChild(script);
        // Khởi tạo plugin
        window.fbAsyncInit = function () {
            window.FB.init({
                xfbml: true,
                version: 'v16.0',
            });
        };
    }, []);

    return (
        <div id="fb-customerchat" className="fb-customerchat" attribution="setup_tool" page_id="106924415607297"></div>
    );
}

export default Messenger;
