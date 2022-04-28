import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['expanded', 'height', 'iconCss', 'id', 'symbols', 'title'];
let outputs: string[] = [];
/**
 * Palette Directive
 * ```html
 * <e-palettes><e-palette></e-palette><e-palettes>
 * ```
 */
@Directive({
    selector: 'e-palettes>e-palette',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class PaletteDirective extends ComplexBase<PaletteDirective> {
    public directivePropList: any;
	


    /** 
     * Sets whether the palette items to be expanded or not
     * @default true
     */
    public expanded: any;
    /** 
     * Sets the height of the symbol group
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public height: any;
    /** 
     * Defines the content of the symbol group
     * @default ''
     */
    public iconCss: any;
    /** 
     * Defines the unique id of a symbol group
     * @default ''
     */
    public id: any;
    /** 
     * Defines the collection of predefined symbols
     * @asptype object
     */
    public symbols: any;
    /** 
     * Defines the title of the symbol group
     * @default ''
     */
    public title: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Palette Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-symbolpalette>e-palettes',
    queries: {
        children: new ContentChildren(PaletteDirective)
    },
})
export class PalettesDirective extends ArrayBase<PalettesDirective> {
    constructor() {
        super('palettes');
    }
}