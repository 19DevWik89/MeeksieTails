export default function setControls(){
    window.addEventListener("keydown",(e)=>{
        let key = e.key;

        switch(key){
            case "w":
                DIR.up = true;

            case "a":
                DIR.left = true;
                break;
            
            case "d":
                DIR.right = true;
                break;

            case "s":
                DIR.down = true;
                break;

            default:
                break;
        }
    })

    window.addEventListener("keyup",(e)=>{
        let key = e.key;

        switch(key){
            case "w":
                DIR.up = false;

            case "a":
                DIR.left = false; 
                break;
            
            case "d":
                DIR.right = false;
                break;

            case "s":
                DIR.down = false;
                break;

            default:
                break;
        }
    })
}