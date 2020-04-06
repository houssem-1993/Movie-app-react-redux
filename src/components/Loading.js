import React from 'react'
import './Loading.css'

 function Loading(Component) {
    return function withtLoadingComponent({isLoading, ...props}){
        if (!isLoading) return <Component {...props} />
        return(
            <div>
                <div class="sk-chase">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
</div>
            </div>

        );
    }
       
    
}
export default Loading