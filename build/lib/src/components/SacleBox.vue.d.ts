declare const _sfc_main: import("vue").DefineComponent<{
    width: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    height: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    props: any;
    scale: import("vue").Ref<number>;
    width: import("vue").Ref<number>;
    dom: import("vue").Ref<any>;
    height: import("vue").Ref<number>;
    getScale: () => number;
    setScale: () => void;
    resize: import("lodash").DebouncedFunc<() => void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    height: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>>, {
    width: number;
    height: number;
}>;
export default _sfc_main;
