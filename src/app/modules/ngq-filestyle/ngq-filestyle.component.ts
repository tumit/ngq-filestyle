/// <reference path="../../../typings.d.ts" />
import 'bootstrap-filestyle';
import 'jquery';
import { Component, OnInit, forwardRef, Input, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const NGQ_FILESTYLE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgqFilestyleComponent),
  multi: true
};

const BOOTSTRAP_FILESTYLE = '~ div.bootstrap-filestyle';
const INPUT_TEXT = BOOTSTRAP_FILESTYLE + ' > input';

@Component({
  selector: 'ngq-filestyle',
  templateUrl: './ngq-filestyle.component.html',
  styleUrls: ['./ngq-filestyle.component.css'],
  providers: [NGQ_FILESTYLE_VALUE_ACCESSOR]
})
export class NgqFilestyleComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  @Input() clearIcon: false;
  @Input() clearIconText: '';
  @Input() maxSize = 5 * 2014 * 1024;
  @Input() acceptTypes: string[];
  @Input() id: string;
  @Input() class: string;

  @ViewChild('input') input: ElementRef;
  @ViewChild('clear') clear: ElementRef;

  _jQueryElement: JQuery;
  _opts: FilestyleOption = { buttonText: 'Upload' };
  _fileName: string;

  constructor() { }

  @Input('opts')
  set otps(opts: FilestyleOption) {
    if (opts) {
      this._opts = opts;
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._jQueryElement = jQuery(this.input.nativeElement);
    this._jQueryElement.filestyle('destroy');
    this._jQueryElement.filestyle(this._opts);
    this._jQueryElement.find(INPUT_TEXT).val(this._fileName);
  }

  onChange(files: File[]) {
    this.propagateChange((files.length > 0) ? files[0] : null);
  }

  onClear() {
    if (this._jQueryElement) {
      this._jQueryElement.filestyle('clear');
    }
    this.propagateChange(null);
  }

  propagateChange = _ => { };

  writeValue(obj: any): void {
    if (obj instanceof String) {
      this._fileName = String(obj);
    } else if (obj instanceof File) {
      this._fileName = (obj as File).name;
    } else {
      this._fileName = obj;
    }

    if (this._jQueryElement) {
      if (!this._fileName) {
        this._jQueryElement.filestyle('clear');
      }
      this._jQueryElement.find(INPUT_TEXT).val(this._fileName);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void {
    if (this._jQueryElement) {
      this._jQueryElement.prop('disabled', isDisabled);
    }
  }

}
