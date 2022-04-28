import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { SplitButton } from '@syncfusion/ej2-splitbuttons';

import { SplitButtonItemsDirective } from './items.directive';

export const inputs: string[] = ['content','createPopupOnClick','cssClass','disabled','enableHtmlSanitizer','enablePersistence','enableRtl','iconCss','iconPosition','items','locale','target'];
export const outputs: string[] = ['beforeClose','beforeItemRender','beforeOpen','click','close','created','open','select'];
export const twoWays: string[] = [];

/**
 * Represents the Angular SplitButton Component.
 * ```html
 * <ejs-splitbutton content='Split Button'></ejs-splitbutton>
 * ```
 */
@Component({
    selector: 'ejs-splitbutton',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content ></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childItems: new ContentChild(SplitButtonItemsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class SplitButtonComponent extends SplitButton implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	beforeClose: any;
	beforeItemRender: any;
	beforeOpen: any;
	click: any;
	close: any;
	created: any;
	open: any;
	public select: any;
    public childItems: QueryList<SplitButtonItemsDirective>;
    public tags: string[] = ['items'];

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
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

