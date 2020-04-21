import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = ["icon"]

  heart(e) {
    e.preventDefault();

    let item_id = document.querySelector('#item_id').value;

    Rails.ajax({
      url: `/api/v1/items/${item_id}/favorite`, 
      type: 'POST', 
      success: resp => {
        if (resp.status === "favorited") {
          this.iconTarget.classList.remove('far');
          this.iconTarget.classList.add('fas');
        } else {
          this.iconTarget.classList.remove('fas');
          this.iconTarget.classList.add('far');
        }
      }, 
      error: err => {
        console.log(err);
      } 
    })
  }
}
