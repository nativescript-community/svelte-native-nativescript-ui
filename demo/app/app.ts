
import { svelteNativeNoFrame, DomTraceCategory } from "svelte-native";
import RadListViewElement from "@nativesctipt-community/svelte-native-nativescript-ui/listview"
import RadSideDrawerElement from "@nativesctipt-community/svelte-native-nativescript-ui/sidedrawer"
import RadCalendarElement from "@nativesctipt-community/svelte-native-nativescript-ui/calendar"
import Charts from "@nativesctipt-community/svelte-native-nativescript-ui/chart"
import RadDataFrom from "@nativesctipt-community/svelte-native-nativescript-ui/dataform"
import Gauges from "@nativesctipt-community/svelte-native-nativescript-ui/gauge"
import AutoCompleteElement from "@nativesctipt-community/svelte-native-nativescript-ui/autocomplete"

RadListViewElement.register();
RadSideDrawerElement.register();
RadCalendarElement.register();
Charts.register();
RadDataFrom.register();
Gauges.register();
AutoCompleteElement.register();

//import * as trace from "tns-core-modules/trace"
//trace.enable();
//trace.addCategories(DomTraceCategory);

import App from  "./App.svelte";
svelteNativeNoFrame(App, {});
