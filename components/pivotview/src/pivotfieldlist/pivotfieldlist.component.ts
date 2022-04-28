import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { PivotFieldList } from '@syncfusion/ej2-pivotview';



export const inputs: string[] = ['aggregateTypes','allowCalculatedField','allowDeferLayoutUpdate','cssClass','currencyCode','dataSourceSettings','enablePersistence','enableRtl','loadOnDemandInMemberEditor','locale','maxNodeLimitInMemberEditor','renderMode','showValuesButton','spinnerTemplate','target'];
export const outputs: string[] = ['actionBegin','actionComplete','actionFailure','aggregateCellInfo','aggregateMenuOpen','beforeServiceInvoke','calculatedFieldCreate','created','dataBound','destroyed','enginePopulated','enginePopulating','fieldDragStart','fieldDrop','fieldRemove','load','memberEditorOpen','memberFiltering','onFieldDropped'];
export const twoWays: string[] = [];

/**
 * `ej-pivotfieldlist` represents the Angular PivotFieldList Component.
 * ```html
 * <ej-pivotfieldlist></ej-pivotfieldlist>
 * ```
 */
@Component({
    selector: 'ejs-pivotfieldlist',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class PivotFieldListComponent extends PivotFieldList implements IComponentBase {
    public context : any;
    public tagObjects: any;
	actionBegin: any;
	actionComplete: any;
	actionFailure: any;
	aggregateCellInfo: any;
	aggregateMenuOpen: any;
	beforeServiceInvoke: any;
	calculatedFieldCreate: any;
	created: any;
	dataBound: any;
	destroyed: any;
	enginePopulated: any;
	enginePopulating: any;
	fieldDragStart: any;
	fieldDrop: any;
	fieldRemove: any;
	load: any;
	memberEditorOpen: any;
	memberFiltering: any;
	public onFieldDropped: any;



    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('PivotViewCalculatedField');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context  = new ComponentBase();
    }

    public ngOnInit() {
        this.context.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.context.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.context.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

