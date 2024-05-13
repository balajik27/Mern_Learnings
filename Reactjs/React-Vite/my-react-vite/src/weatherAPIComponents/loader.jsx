import LoadingImg from '../assets/images/loading.gif'

export default function Loader(){
    return(
        <div className="text-center">
            <img src={LoadingImg} className="loading_img" alt="" />
        </div>
    )
}