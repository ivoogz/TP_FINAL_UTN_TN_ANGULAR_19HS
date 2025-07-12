import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Courses } from './courses/courses';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Courses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'proyectoFinalUTN_IvanGomez';
}
