; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

[Setup]
AppName=LCU03
AppVerName=LCU03-0.0.1-alpha
AppPublisher=Aist-NT
AppPublisherURL=http://www.aist-nt.com/
AppSupportURL=http://www.aist-nt.com/
AppUpdatesURL=http://www.aist-nt.com/
DefaultDirName=c:\Aist\LCU03-0.0.1-alpha
DefaultGroupName=LCU03
AllowNoIcons=yes
OutputBaseFilename=LCU03-0.0.1-alpha
SetupIconFile=./icon.ico
Compression=lzma
SolidCompression=yes
SourceDir=.
ArchitecturesInstallIn64BitMode=x64

;[Languages]
;Name: "english"; MessagesFile: "compiler:Default.isl"; InfoAfterFile: "infoafter.txt"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked;

[Files]
Source: "..\app\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: "{group}\LCU03-0.0.1-alpha"; Filename: "{app}\lcu03.exe"; WorkingDir: "{app}"
Name: "{group}\{cm:ProgramOnTheWeb,aist}"; Filename: "http://www.aist-nt.com/"
Name: "{group}\{cm:UninstallProgram,aist}"; Filename: "{uninstallexe}"
Name: "{commondesktop}\LCU03-0.0.1-alpha"; Filename: "{app}\lcu03.exe"; WorkingDir: "{app}"; Tasks: desktopicon

[Run]
Filename: "{app}\vcredist_x86.exe"; Description: "x86 runtime envirinment install. It's necessary to install it at least once."; Check: not Is64BitInstallMode
Filename: "{app}\vcredist_x64.exe"; Description: "x64 runtime envirinment install. It's necessary to install it at least once."; Check: Is64BitInstallMode


