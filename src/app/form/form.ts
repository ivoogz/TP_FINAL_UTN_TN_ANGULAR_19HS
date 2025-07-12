import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface OpinionInterface {
  author: string;
  opinion: string;
  id: number;
}


@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  opinion : OpinionInterface[] = []

  enviarMensaje() {
    console.log("Mensaje enviado");
    console.log(this.form_state);
    this.opinion.push({
      author: this.form_state.author,
      opinion: this.form_state.opinion,
      id: this.opinion.length + 1
    })
    this.form_state.author = ''
    this.form_state.opinion = ''
  }
  form_state = {
    author: '',
    opinion: '',
  }

}
