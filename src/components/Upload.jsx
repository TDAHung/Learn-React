import { useEffect } from 'react';
import { useState } from 'react';
import { Input } from 'reactstrap';
const Upload = () => {

    const [imgURL, setImgURL] = useState('');
    const [show, setShow] = useState('');

    const onChange = (e) => {
        const files = e.target.files;
        const url = URL.createObjectURL(files[0]);
        setImgURL(url);
        if (!imgURL) setShow('true');
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(imgURL);
        }
    });
    return (
        <div>
            <Input onChange={(e) => { onChange(e) }} id="image" type="file" name="file" accept=".png,.jpeg,.jpg" />
            {show && <img src={imgURL} alt="" />}
        </div>)
}

export default Upload;