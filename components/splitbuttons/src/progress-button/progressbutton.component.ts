import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { ProgressButton } from '@syncfusion/ej2-splitbuttons';



export const inputs: string[] = ['animationSettings','content','cssClass','disabled','duration','enableHtmlSanitizer','enableProgress','iconCss','iconPosition','isPrimary','isToggle','spinSettings'];
export const outputs: string[] = ['begin','created','end','fail','progress'];
export const twoWays: string[] = [];

/**
 * Represents the Angular ProgressButton Component.
 * ```html
 * <button ejs-progressbutton content='Progress Button'></button>
 * ```
 */
@Component({
    selector: '[ejs-progressbutton]',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class ProgressButtonComponent extends ProgressButton implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	begin: any;
	created: any;
	end: any;
	fail: any;
	public progress: any;



    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext  = new ComponentBase();
    }

    public ngOnInit() {
        this.containerContext.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.containerContext.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.containerContext.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

