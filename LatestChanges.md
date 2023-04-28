## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/ca966c045975b47d949fb4dc98cca851af8fe846

## API Changes

```plain
Renamed Class
"ImporterBaseSettings" to "BaseImportData"

Renamed Class
"ImporterGroupSettings" to "GroupImportData"

Renamed Class
"ImporterMaterialSettings" to "MaterialImportData"

Renamed Class
"ImporterMeshSettings" to "MeshImportData"

Added Class CSGOptions : Instance
Added Class AnimationImportData : BaseImportData [NotCreatable] [NotReplicated]
Added Class FacsImportData : BaseImportData [NotCreatable] [NotReplicated]
Added Class JointImportData : BaseImportData [NotCreatable] [NotReplicated]

Added Class RootImportData : BaseImportData [NotCreatable] [NotReplicated]
	Added Property bool RootImportData.AddModelToInventory
	Added Property bool RootImportData.Anchored
	Added Property float RootImportData.AnimationIdForRestPose
	Added Property string RootImportData.ExistingPackageId
	Added Property Vector3 RootImportData.FileDimensions [ReadOnly]
	Added Property bool RootImportData.ImportAsModelAsset
	Added Property bool RootImportData.ImportAsPackage
	Added Property bool RootImportData.InsertInWorkspace
	Added Property bool RootImportData.InsertWithScenePosition
	Added Property bool RootImportData.InvertNegativeFaces
	Added Property bool RootImportData.MergeMeshes
	Added Property float RootImportData.PolygonCount [ReadOnly]
	Added Property Enum.RestPose RootImportData.RestPose
	Added Property Enum.RigScale RootImportData.RigScale
	Added Property Enum.RigType RootImportData.RigType
	Added Property Enum.MeshScaleUnit RootImportData.ScaleUnit
	Added Property bool RootImportData.UseSceneOriginAsCFrame
	Added Property bool RootImportData.UseSceneOriginAsPivot
	Added Property bool RootImportData.UsesCages
	Added Property Enum.NormalId RootImportData.WorldForward
	Added Property Enum.NormalId RootImportData.WorldUp

Added Property Vector3 AirController.LinearImpulse
Added Property float GroundController.TurnSpeedFactor
Added Property Color3 Studio.HintColor [NotReplicated]
Added Property Color3 Studio.InformationColor [NotReplicated]

Added Function bool AssetImportSession:HasAnimation() {RobloxScriptSecurity}
Added Function bool AssetImportSession:usesCustomRestPoseLua() {RobloxScriptSecurity}
Added Function bool Player:IsVerified()

Added Enum RestPose
	Added EnumItem RestPose.Default : 0
	Added EnumItem RestPose.RotationsReset : 1
	Added EnumItem RestPose.Custom : 2

Added EnumItem Severity.Information : 3
Added EnumItem Severity.Hint : 4
Added EnumItem StudioScriptEditorColorCategories.Info : 24
Added EnumItem StudioScriptEditorColorCategories.Hint : 25
Added EnumItem StudioStyleGuideColor.ScriptInformation : 62
Added EnumItem StudioStyleGuideColor.ScriptHint : 63

Added LegacyName "Montserrat" to EnumItem Font.Gotham
Added LegacyName "MontserratMedium" to EnumItem Font.GothamMedium
Added LegacyName "MontserratBold" to EnumItem Font.GothamBold
Added LegacyName "MontserratBlack" to EnumItem Font.GothamBlack

Added Tags [Hidden] [NotReplicated] [Deprecated] to Property AirController.VectorForce

Changed the superclass of Class GroupImportData 
	from: "ImporterBaseSettings"
	  to: "BaseImportData"

Changed the superclass of Class MaterialImportData 
	from: "ImporterBaseSettings"
	  to: "BaseImportData"

Changed the superclass of Class MeshImportData 
	from: "ImporterBaseSettings"
	  to: "BaseImportData"

Changed the thread safety and serialization of Property AirController.VectorForce 
	from: {🧬LocalSafe} [<💾|📁> Saves|Loads]
	  to: {🧬Safe} [<📁> LoadOnly]

Changed the value of EnumItem RigType.Custom from 3 to 1
Changed the value of EnumItem RigType.None from 4 to 2
Changed the value of EnumItem StudioScriptEditorColorCategories.Whitespace from 24 to 26
Changed the value of EnumItem StudioScriptEditorColorCategories.ActiveLine from 25 to 27
Changed the value of EnumItem StudioScriptEditorColorCategories.DebuggerCurrentLine from 26 to 28
Changed the value of EnumItem StudioScriptEditorColorCategories.DebuggerErrorLine from 27 to 29
Changed the value of EnumItem StudioScriptEditorColorCategories.Ruler from 28 to 30
Changed the value of EnumItem StudioScriptEditorColorCategories.Bracket from 29 to 31
Changed the value of EnumItem StudioScriptEditorColorCategories.MenuPrimaryText from 30 to 32
Changed the value of EnumItem StudioScriptEditorColorCategories.MenuSecondaryText from 31 to 33
Changed the value of EnumItem StudioScriptEditorColorCategories.MenuSelectedText from 32 to 34
Changed the value of EnumItem StudioScriptEditorColorCategories.MenuBackground from 33 to 35
Changed the value of EnumItem StudioScriptEditorColorCategories.MenuSelectedBackground from 34 to 36
Changed the value of EnumItem StudioScriptEditorColorCategories.MenuScrollbarBackground from 35 to 37
Changed the value of EnumItem StudioScriptEditorColorCategories.MenuScrollbarHandle from 36 to 38
Changed the value of EnumItem StudioScriptEditorColorCategories.MenuBorder from 37 to 39
Changed the value of EnumItem StudioScriptEditorColorCategories.DocViewCodeBackground from 38 to 40
Changed the value of EnumItem StudioStyleGuideColor.ScriptWhitespace from 62 to 64
Changed the value of EnumItem StudioStyleGuideColor.ScriptRuler from 63 to 65
Changed the value of EnumItem StudioStyleGuideColor.DocViewCodeBackground from 64 to 66
Changed the value of EnumItem StudioStyleGuideColor.DebuggerCurrentLine from 65 to 67
Changed the value of EnumItem StudioStyleGuideColor.DebuggerErrorLine from 66 to 68
Changed the value of EnumItem StudioStyleGuideColor.DiffFilePathText from 67 to 69
Changed the value of EnumItem StudioStyleGuideColor.DiffTextHunkInfo from 68 to 70
Changed the value of EnumItem StudioStyleGuideColor.DiffTextNoChange from 69 to 71
Changed the value of EnumItem StudioStyleGuideColor.DiffTextAddition from 70 to 72
Changed the value of EnumItem StudioStyleGuideColor.DiffTextDeletion from 71 to 73
Changed the value of EnumItem StudioStyleGuideColor.DiffTextSeparatorBackground from 72 to 74
Changed the value of EnumItem StudioStyleGuideColor.DiffTextNoChangeBackground from 73 to 75
Changed the value of EnumItem StudioStyleGuideColor.DiffTextAdditionBackground from 74 to 76
Changed the value of EnumItem StudioStyleGuideColor.DiffTextDeletionBackground from 75 to 77
Changed the value of EnumItem StudioStyleGuideColor.DiffLineNum from 76 to 78
Changed the value of EnumItem StudioStyleGuideColor.DiffLineNumSeparatorBackground from 77 to 79
Changed the value of EnumItem StudioStyleGuideColor.DiffLineNumNoChangeBackground from 78 to 80
Changed the value of EnumItem StudioStyleGuideColor.DiffLineNumAdditionBackground from 79 to 81
Changed the value of EnumItem StudioStyleGuideColor.DiffLineNumDeletionBackground from 80 to 82
Changed the value of EnumItem StudioStyleGuideColor.DiffFilePathBackground from 81 to 83
Changed the value of EnumItem StudioStyleGuideColor.DiffFilePathBorder from 82 to 84
Changed the value of EnumItem StudioStyleGuideColor.ChatIncomingBgColor from 83 to 85
Changed the value of EnumItem StudioStyleGuideColor.ChatIncomingTextColor from 84 to 86
Changed the value of EnumItem StudioStyleGuideColor.ChatOutgoingBgColor from 85 to 87
Changed the value of EnumItem StudioStyleGuideColor.ChatOutgoingTextColor from 86 to 88
Changed the value of EnumItem StudioStyleGuideColor.ChatModeratedMessageColor from 87 to 89
Changed the value of EnumItem StudioStyleGuideColor.Separator from 88 to 90
Changed the value of EnumItem StudioStyleGuideColor.ButtonBorder from 89 to 91
Changed the value of EnumItem StudioStyleGuideColor.ButtonText from 90 to 92
Changed the value of EnumItem StudioStyleGuideColor.InputFieldBorder from 91 to 93
Changed the value of EnumItem StudioStyleGuideColor.CheckedFieldBackground from 92 to 94
Changed the value of EnumItem StudioStyleGuideColor.CheckedFieldBorder from 93 to 95
Changed the value of EnumItem StudioStyleGuideColor.CheckedFieldIndicator from 94 to 96
Changed the value of EnumItem StudioStyleGuideColor.HeaderSection from 95 to 97
Changed the value of EnumItem StudioStyleGuideColor.Midlight from 96 to 98
Changed the value of EnumItem StudioStyleGuideColor.StatusBar from 97 to 99
Changed the value of EnumItem StudioStyleGuideColor.DialogButton from 98 to 100
Changed the value of EnumItem StudioStyleGuideColor.DialogButtonText from 99 to 101
Changed the value of EnumItem StudioStyleGuideColor.DialogButtonBorder from 100 to 102
Changed the value of EnumItem StudioStyleGuideColor.DialogMainButton from 101 to 103
Changed the value of EnumItem StudioStyleGuideColor.DialogMainButtonText from 102 to 104
Changed the value of EnumItem StudioStyleGuideColor.InfoBarWarningBackground from 103 to 105
Changed the value of EnumItem StudioStyleGuideColor.InfoBarWarningText from 104 to 106
Changed the value of EnumItem StudioStyleGuideColor.ScriptEditorCurrentLine from 105 to 107
Changed the value of EnumItem StudioStyleGuideColor.ScriptMethod from 106 to 108
Changed the value of EnumItem StudioStyleGuideColor.ScriptProperty from 107 to 109
Changed the value of EnumItem StudioStyleGuideColor.ScriptNil from 108 to 110
Changed the value of EnumItem StudioStyleGuideColor.ScriptBool from 109 to 111
Changed the value of EnumItem StudioStyleGuideColor.ScriptFunction from 110 to 112
Changed the value of EnumItem StudioStyleGuideColor.ScriptLocal from 111 to 113
Changed the value of EnumItem StudioStyleGuideColor.ScriptSelf from 112 to 114
Changed the value of EnumItem StudioStyleGuideColor.ScriptLuauKeyword from 113 to 115
Changed the value of EnumItem StudioStyleGuideColor.ScriptFunctionName from 114 to 116
Changed the value of EnumItem StudioStyleGuideColor.ScriptTodo from 115 to 117
Changed the value of EnumItem StudioStyleGuideColor.ScriptBracket from 116 to 118
Changed the value of EnumItem StudioStyleGuideColor.AttributeCog from 117 to 119

Moved Property Anchored
	from: Class GroupImportData
	  to: Class MeshImportData

Moved Property Anchored
	from: Class GroupImportData
	  to: Class RootImportData

Moved Property ImportAsModelAsset
	from: Class GroupImportData
	  to: Class RootImportData

Moved Property InsertInWorkspace
	from: Class GroupImportData
	  to: Class RootImportData

Moved Property Anchored
	from: Class MeshImportData
	  to: Class GroupImportData

Moved Property Anchored
	from: Class MeshImportData
	  to: Class RootImportData

Moved Property PolygonCount
	from: Class MeshImportData
	  to: Class RootImportData

Removed Class ImporterAnimationSettings
Removed Class ImporterFacsSettings
Removed Class ImporterJointSettings

Removed Class ImporterRootSettings
	Removed Property ImporterRootSettings.AddModelToInventory
	Removed Property ImporterRootSettings.Anchored
	Removed Property ImporterRootSettings.ExistingPackageId
	Removed Property ImporterRootSettings.FileDimensions
	Removed Property ImporterRootSettings.ImportAsModelAsset
	Removed Property ImporterRootSettings.ImportAsPackage
	Removed Property ImporterRootSettings.InsertInWorkspace
	Removed Property ImporterRootSettings.InsertWithScenePosition
	Removed Property ImporterRootSettings.InvertNegativeFaces
	Removed Property ImporterRootSettings.MergeMeshes
	Removed Property ImporterRootSettings.PolygonCount
	Removed Property ImporterRootSettings.RigScale
	Removed Property ImporterRootSettings.RigType
	Removed Property ImporterRootSettings.ScaleUnit
	Removed Property ImporterRootSettings.UseSceneOriginAsCFrame
	Removed Property ImporterRootSettings.UseSceneOriginAsPivot
	Removed Property ImporterRootSettings.UsesCages
	Removed Property ImporterRootSettings.WorldForward
	Removed Property ImporterRootSettings.WorldUp

Removed Class VoiceSource
	Removed Property VoiceSource.UserId

Removed EnumItem RigType.Rthro
Removed EnumItem RigType.RthroNarrow
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#573) for a syntax highlighted version!)