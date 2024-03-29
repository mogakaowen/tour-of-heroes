import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {} // Angular only binds to public component properties. 
  // The messageService property must be public because you're going to bind to it in the template.
}
