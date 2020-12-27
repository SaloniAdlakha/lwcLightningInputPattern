import { LightningElement,track} from 'lwc';

export default class LwcLightningInputPattern extends LightningElement {
  @track username;
  handleChange(event){
     if(event.target.name == 'username'){
         this.username = event.target.value;
     }
  }
}
