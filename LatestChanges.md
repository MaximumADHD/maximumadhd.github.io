## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/743b6726ca5a911adb1f62465c8a70f69577b1d0

## API Changes

```plain
Added Class TrackerLodController : Instance [NotCreatable] [NotReplicated]
	Added Property Enum.TrackerLodFlagMode TrackerLodController.AudioMode
	Added Property Enum.TrackerLodValueMode TrackerLodController.VideoLodMode
	Added Property Enum.TrackerLodFlagMode TrackerLodController.VideoMode
	Added Function int TrackerLodController:getVideoLod() {RobloxScriptSecurity}
	Added Function bool TrackerLodController:isAudioEnabled() {RobloxScriptSecurity}
	Added Function bool TrackerLodController:isVideoEnabled() {RobloxScriptSecurity}
	Added Event TrackerLodController.UpdateState() {RobloxScriptSecurity}

Added Property int64 AdPortal.PortalVersion {RobloxScriptSecurity} [Hidden] [ReadOnly]
Added Property PhysicalProperties BasePart.CurrentPhysicalProperties [ReadOnly]
Added Property Enum.FacialAnimationFlags FacialAnimationStreamingService.EnableFlags {RobloxScriptSecurity} [Hidden]
Added Property bool NotificationService.IsConnected {RobloxScriptSecurity} [Hidden] [ReadOnly]

Added Function TrackerLodController FaceAnimatorService:GetTrackerLodController() {RobloxScriptSecurity}
Added Function void FaceAnimatorService:Step() {RobloxScriptSecurity}
Added Function void ScriptEditorService:RegisterAutocompleteCallback(Function callbackFunction) {PluginSecurity}

Added Enum CompletionItemKind
	Added EnumItem CompletionItemKind.Text : 1
	Added EnumItem CompletionItemKind.Method : 2
	Added EnumItem CompletionItemKind.Function : 3
	Added EnumItem CompletionItemKind.Constructor : 4
	Added EnumItem CompletionItemKind.Field : 5
	Added EnumItem CompletionItemKind.Variable : 6
	Added EnumItem CompletionItemKind.Class : 7
	Added EnumItem CompletionItemKind.Interface : 8
	Added EnumItem CompletionItemKind.Module : 9
	Added EnumItem CompletionItemKind.Property : 10
	Added EnumItem CompletionItemKind.Unit : 11
	Added EnumItem CompletionItemKind.Value : 12
	Added EnumItem CompletionItemKind.Enum : 13
	Added EnumItem CompletionItemKind.Keyword : 14
	Added EnumItem CompletionItemKind.Snippet : 15
	Added EnumItem CompletionItemKind.Color : 16
	Added EnumItem CompletionItemKind.File : 17
	Added EnumItem CompletionItemKind.Reference : 18
	Added EnumItem CompletionItemKind.Folder : 19
	Added EnumItem CompletionItemKind.EnumMember : 20
	Added EnumItem CompletionItemKind.Constant : 21
	Added EnumItem CompletionItemKind.Struct : 22
	Added EnumItem CompletionItemKind.Event : 23
	Added EnumItem CompletionItemKind.Operator : 24
	Added EnumItem CompletionItemKind.TypeParameter : 25

Added Enum CompletionItemTag
	Added EnumItem CompletionItemTag.Deprecated : 1
	Added EnumItem CompletionItemTag.IncorrectIndexType : 2
	Added EnumItem CompletionItemTag.PluginPermissions : 3
	Added EnumItem CompletionItemTag.CommandLinePermissions : 4
	Added EnumItem CompletionItemTag.RobloxPermissions : 5
	Added EnumItem CompletionItemTag.AddParens : 6
	Added EnumItem CompletionItemTag.PutCursorInParens : 7
	Added EnumItem CompletionItemTag.TypeCorrect : 8
	Added EnumItem CompletionItemTag.ClientServerBoundaryViolation : 9

Added Enum CompletionTriggerKind
	Added EnumItem CompletionTriggerKind.Invoked : 1
	Added EnumItem CompletionTriggerKind.TriggerCharacter : 2
	Added EnumItem CompletionTriggerKind.TriggerForIncompleteCompletions : 3

Added Enum FacialAnimationFlags
	Added EnumItem FacialAnimationFlags.None : 0
	Added EnumItem FacialAnimationFlags.Place : 1
	Added EnumItem FacialAnimationFlags.Server : 2
	Added EnumItem FacialAnimationFlags.PlaceServer : 3

Added Enum MarkupKind
	Added EnumItem MarkupKind.PlainText : 0
	Added EnumItem MarkupKind.Markdown : 1

Added Enum TrackerLodFlagMode
	Added EnumItem TrackerLodFlagMode.ForceFalse : 0
	Added EnumItem TrackerLodFlagMode.ForceTrue : 1
	Added EnumItem TrackerLodFlagMode.Auto : 2

Added Enum TrackerLodValueMode
	Added EnumItem TrackerLodValueMode.Force0 : 0
	Added EnumItem TrackerLodValueMode.Force1 : 1
	Added EnumItem TrackerLodValueMode.Auto : 2

Removed Property FaceAnimatorService.TrackerMode

Removed Function ScriptEditorService:RegisterLSPCallback

Removed Enum LSPMethodType
	Removed EnumItem LSPMethodType.Initialize
	Removed EnumItem LSPMethodType.Initialized
	Removed EnumItem LSPMethodType.CancelRequest
	Removed EnumItem LSPMethodType.TextDocument_didOpen
	Removed EnumItem LSPMethodType.TextDocument_didChange
	Removed EnumItem LSPMethodType.TextDocument_didClose
	Removed EnumItem LSPMethodType.TextDocument_foldingRange
	Removed EnumItem LSPMethodType.TextDocument_onTypeFormatting
	Removed EnumItem LSPMethodType.TextDocument_formatting
	Removed EnumItem LSPMethodType.TextDocument_rangeFormatting
	Removed EnumItem LSPMethodType.TextDocument_hover
	Removed EnumItem LSPMethodType.TextDocument_signatureHelp
	Removed EnumItem LSPMethodType.Workspace_DidChangeConfiguration
	Removed EnumItem LSPMethodType.ShutdownRequest
	Removed EnumItem LSPMethodType.Completion
	Removed EnumItem LSPMethodType.Declaration
	Removed EnumItem LSPMethodType.DocumentSymbols
	Removed EnumItem LSPMethodType.TextDocument_publishDiagnostics
	Removed EnumItem LSPMethodType.Window_showMessage
	Removed EnumItem LSPMethodType.Window_showMessageRequest
	Removed EnumItem LSPMethodType.Roblox_registerSyntaxCategories
	Removed EnumItem LSPMethodType.Roblox_signalQuiescence
	Removed EnumItem LSPMethodType.Roblox_syntaxHighlight
	Removed EnumItem LSPMethodType.Roblox_suggestExtraSelections
	Removed EnumItem LSPMethodType.Roblox_findExecutablePosition
	Removed EnumItem LSPMethodType.Roblox_findColor3
	Removed EnumItem LSPMethodType.Roblox_patchSnippetData

Removed Tag [NotCreatable] from Class AdGui
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#545) for a syntax highlighted version!)