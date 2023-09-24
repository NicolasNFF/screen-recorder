import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-screen-recorder',
  templateUrl: './screen-recorder.component.html',
  styleUrls: ['./screen-recorder.component.css']
})
export class ScreenRecorderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.loadScreenRecorder();
}

loadScreenRecorder() {
  const screenRecorderContainer = document.getElementById('screen-recorder-container');
  if (screenRecorderContainer) {
    const script = document.createElement('script');
    script.src = 'https://api.apowersoft.com/screen-recorder?lang=pt';
    script.defer = true;
    screenRecorderContainer.appendChild(script);
  }
}
}
